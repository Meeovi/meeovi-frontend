import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesFilter } from "../inputs/BytesFilter";

@TypeGraphQL.InputType("Product_propertyScalarWhereInput", {})
export class Product_propertyScalarWhereInput {
  @TypeGraphQL.Field(_type => [Product_propertyScalarWhereInput], {
    nullable: true
  })
  AND?: Product_propertyScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_propertyScalarWhereInput], {
    nullable: true
  })
  OR?: Product_propertyScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_propertyScalarWhereInput], {
    nullable: true
  })
  NOT?: Product_propertyScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  product_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  product_version_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  property_group_option_id?: BytesFilter | undefined;
}
