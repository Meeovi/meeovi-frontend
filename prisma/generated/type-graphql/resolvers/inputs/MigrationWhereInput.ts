import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("MigrationWhereInput", {})
export class MigrationWhereInput {
  @TypeGraphQL.Field(_type => [MigrationWhereInput], {
    nullable: true
  })
  AND?: MigrationWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MigrationWhereInput], {
    nullable: true
  })
  OR?: MigrationWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MigrationWhereInput], {
    nullable: true
  })
  NOT?: MigrationWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  class?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  creation_timestamp?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  update?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  update_destructive?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  message?: StringNullableFilter | undefined;
}
