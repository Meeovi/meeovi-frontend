import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_manufacturer_translationCreateManyProduct_manufacturerInputEnvelope } from "../inputs/Product_manufacturer_translationCreateManyProduct_manufacturerInputEnvelope";
import { Product_manufacturer_translationCreateOrConnectWithoutProduct_manufacturerInput } from "../inputs/Product_manufacturer_translationCreateOrConnectWithoutProduct_manufacturerInput";
import { Product_manufacturer_translationCreateWithoutProduct_manufacturerInput } from "../inputs/Product_manufacturer_translationCreateWithoutProduct_manufacturerInput";
import { Product_manufacturer_translationWhereUniqueInput } from "../inputs/Product_manufacturer_translationWhereUniqueInput";

@TypeGraphQL.InputType("Product_manufacturer_translationCreateNestedManyWithoutProduct_manufacturerInput", {})
export class Product_manufacturer_translationCreateNestedManyWithoutProduct_manufacturerInput {
  @TypeGraphQL.Field(_type => [Product_manufacturer_translationCreateWithoutProduct_manufacturerInput], {
    nullable: true
  })
  create?: Product_manufacturer_translationCreateWithoutProduct_manufacturerInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_manufacturer_translationCreateOrConnectWithoutProduct_manufacturerInput], {
    nullable: true
  })
  connectOrCreate?: Product_manufacturer_translationCreateOrConnectWithoutProduct_manufacturerInput[] | undefined;

  @TypeGraphQL.Field(_type => Product_manufacturer_translationCreateManyProduct_manufacturerInputEnvelope, {
    nullable: true
  })
  createMany?: Product_manufacturer_translationCreateManyProduct_manufacturerInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Product_manufacturer_translationWhereUniqueInput], {
    nullable: true
  })
  connect?: Product_manufacturer_translationWhereUniqueInput[] | undefined;
}
