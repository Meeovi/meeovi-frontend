import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_optionCreateManyProductInputEnvelope } from "../inputs/Product_optionCreateManyProductInputEnvelope";
import { Product_optionCreateOrConnectWithoutProductInput } from "../inputs/Product_optionCreateOrConnectWithoutProductInput";
import { Product_optionCreateWithoutProductInput } from "../inputs/Product_optionCreateWithoutProductInput";
import { Product_optionWhereUniqueInput } from "../inputs/Product_optionWhereUniqueInput";

@TypeGraphQL.InputType("Product_optionCreateNestedManyWithoutProductInput", {})
export class Product_optionCreateNestedManyWithoutProductInput {
  @TypeGraphQL.Field(_type => [Product_optionCreateWithoutProductInput], {
    nullable: true
  })
  create?: Product_optionCreateWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_optionCreateOrConnectWithoutProductInput], {
    nullable: true
  })
  connectOrCreate?: Product_optionCreateOrConnectWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => Product_optionCreateManyProductInputEnvelope, {
    nullable: true
  })
  createMany?: Product_optionCreateManyProductInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Product_optionWhereUniqueInput], {
    nullable: true
  })
  connect?: Product_optionWhereUniqueInput[] | undefined;
}
