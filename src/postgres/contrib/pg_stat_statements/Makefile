# contrib/pg_stat_statements/Makefile

MODULE_big = pg_stat_statements
OBJS = \
	$(WIN32RES) \
	pg_stat_statements.o

EXTENSION = pg_stat_statements
DATA = pg_stat_statements--1.10-yb-1.0.sql \
	pg_stat_statements--1.6-yb-1.0--1.10-yb-1.0.sql \
	pg_stat_statements--1.6--1.6-yb-1.0.sql
PGFILEDESC = "pg_stat_statements - execution statistics of SQL statements"
SHLIB_LINK += -L$(YB_BUILD_ROOT)/lib -lserver_process -lyb_pggate_webserver -lhdr_histogram

LDFLAGS_SL += $(filter -lm, $(LIBS))

REGRESS_OPTS = --temp-config $(top_srcdir)/contrib/pg_stat_statements/pg_stat_statements.conf
REGRESS = pg_stat_statements oldextversions
# Disabled because these tests require "shared_preload_libraries=pg_stat_statements",
# which typical installcheck users do not have (e.g. buildfarm clients).
NO_INSTALLCHECK = 1

ifdef USE_PGXS
PG_CONFIG = pg_config
PGXS := $(shell $(PG_CONFIG) --pgxs)
include $(PGXS)
else
subdir = contrib/pg_stat_statements
top_builddir = ../..
include $(top_builddir)/src/Makefile.global
include $(top_srcdir)/contrib/contrib-global.mk
endif
