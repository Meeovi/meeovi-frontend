import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BigIntFilter } from "../inputs/BigIntFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { IncrementWhereInput } from "../inputs/IncrementWhereInput";
import { StringFilter } from "../inputs/StringFilter";
import { incrementPoolClusterKeyCompoundUniqueInput } from "../inputs/incrementPoolClusterKeyCompoundUniqueInput";

@TypeGraphQL.InputType("IncrementWhereUniqueInput", {})
export class IncrementWhereUniqueInput {
  @TypeGraphQL.Field(_type => incrementPoolClusterKeyCompoundUniqueInput, {
    nullable: true
  })
  pool_cluster_key?: incrementPoolClusterKeyCompoundUniqueInput | undefined;

  @TypeGraphQL.Field(_type => [IncrementWhereInput], {
    nullable: true
  })
  AND?: IncrementWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [IncrementWhereInput], {
    nullable: true
  })
  OR?: IncrementWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [IncrementWhereInput], {
    nullable: true
  })
  NOT?: IncrementWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  pool?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  cluster?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  key?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => BigIntFilter, {
    nullable: true
  })
  count?: BigIntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  created_at?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  updated_at?: DateTimeNullableFilter | undefined;
}
