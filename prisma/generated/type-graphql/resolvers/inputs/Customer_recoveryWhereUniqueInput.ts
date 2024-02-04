import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerRelationFilter } from "../inputs/CustomerRelationFilter";
import { Customer_recoveryWhereInput } from "../inputs/Customer_recoveryWhereInput";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("Customer_recoveryWhereUniqueInput", {})
export class Customer_recoveryWhereUniqueInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  id?: Buffer | undefined;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  customer_id?: Buffer | undefined;

  @TypeGraphQL.Field(_type => [Customer_recoveryWhereInput], {
    nullable: true
  })
  AND?: Customer_recoveryWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Customer_recoveryWhereInput], {
    nullable: true
  })
  OR?: Customer_recoveryWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Customer_recoveryWhereInput], {
    nullable: true
  })
  NOT?: Customer_recoveryWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  hash?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  created_at?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  updated_at?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => CustomerRelationFilter, {
    nullable: true
  })
  customer?: CustomerRelationFilter | undefined;
}
