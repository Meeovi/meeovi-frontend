import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_custom_field_setCreateManyProductInputEnvelope } from "../inputs/Product_custom_field_setCreateManyProductInputEnvelope";
import { Product_custom_field_setCreateOrConnectWithoutProductInput } from "../inputs/Product_custom_field_setCreateOrConnectWithoutProductInput";
import { Product_custom_field_setCreateWithoutProductInput } from "../inputs/Product_custom_field_setCreateWithoutProductInput";
import { Product_custom_field_setWhereUniqueInput } from "../inputs/Product_custom_field_setWhereUniqueInput";

@TypeGraphQL.InputType("Product_custom_field_setCreateNestedManyWithoutProductInput", {})
export class Product_custom_field_setCreateNestedManyWithoutProductInput {
  @TypeGraphQL.Field(_type => [Product_custom_field_setCreateWithoutProductInput], {
    nullable: true
  })
  create?: Product_custom_field_setCreateWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_custom_field_setCreateOrConnectWithoutProductInput], {
    nullable: true
  })
  connectOrCreate?: Product_custom_field_setCreateOrConnectWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => Product_custom_field_setCreateManyProductInputEnvelope, {
    nullable: true
  })
  createMany?: Product_custom_field_setCreateManyProductInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Product_custom_field_setWhereUniqueInput], {
    nullable: true
  })
  connect?: Product_custom_field_setWhereUniqueInput[] | undefined;
}
