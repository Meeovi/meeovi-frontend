import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { MigrationWhereInput } from "../inputs/MigrationWhereInput";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("MigrationWhereUniqueInput", {})
export class MigrationWhereUniqueInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  class?: string | undefined;

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
