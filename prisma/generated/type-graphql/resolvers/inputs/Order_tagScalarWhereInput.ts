import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesFilter } from "../inputs/BytesFilter";

@TypeGraphQL.InputType("Order_tagScalarWhereInput", {})
export class Order_tagScalarWhereInput {
  @TypeGraphQL.Field(_type => [Order_tagScalarWhereInput], {
    nullable: true
  })
  AND?: Order_tagScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_tagScalarWhereInput], {
    nullable: true
  })
  OR?: Order_tagScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_tagScalarWhereInput], {
    nullable: true
  })
  NOT?: Order_tagScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  order_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  order_version_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  tag_id?: BytesFilter | undefined;
}
