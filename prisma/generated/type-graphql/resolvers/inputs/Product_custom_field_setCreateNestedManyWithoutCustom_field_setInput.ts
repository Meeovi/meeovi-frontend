import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_custom_field_setCreateManyCustom_field_setInputEnvelope } from "../inputs/Product_custom_field_setCreateManyCustom_field_setInputEnvelope";
import { Product_custom_field_setCreateOrConnectWithoutCustom_field_setInput } from "../inputs/Product_custom_field_setCreateOrConnectWithoutCustom_field_setInput";
import { Product_custom_field_setCreateWithoutCustom_field_setInput } from "../inputs/Product_custom_field_setCreateWithoutCustom_field_setInput";
import { Product_custom_field_setWhereUniqueInput } from "../inputs/Product_custom_field_setWhereUniqueInput";

@TypeGraphQL.InputType("Product_custom_field_setCreateNestedManyWithoutCustom_field_setInput", {})
export class Product_custom_field_setCreateNestedManyWithoutCustom_field_setInput {
  @TypeGraphQL.Field(_type => [Product_custom_field_setCreateWithoutCustom_field_setInput], {
    nullable: true
  })
  create?: Product_custom_field_setCreateWithoutCustom_field_setInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_custom_field_setCreateOrConnectWithoutCustom_field_setInput], {
    nullable: true
  })
  connectOrCreate?: Product_custom_field_setCreateOrConnectWithoutCustom_field_setInput[] | undefined;

  @TypeGraphQL.Field(_type => Product_custom_field_setCreateManyCustom_field_setInputEnvelope, {
    nullable: true
  })
  createMany?: Product_custom_field_setCreateManyCustom_field_setInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Product_custom_field_setWhereUniqueInput], {
    nullable: true
  })
  connect?: Product_custom_field_setWhereUniqueInput[] | undefined;
}
