import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_tagCreateManyProductInputEnvelope } from "../inputs/Product_tagCreateManyProductInputEnvelope";
import { Product_tagCreateOrConnectWithoutProductInput } from "../inputs/Product_tagCreateOrConnectWithoutProductInput";
import { Product_tagCreateWithoutProductInput } from "../inputs/Product_tagCreateWithoutProductInput";
import { Product_tagWhereUniqueInput } from "../inputs/Product_tagWhereUniqueInput";

@TypeGraphQL.InputType("Product_tagCreateNestedManyWithoutProductInput", {})
export class Product_tagCreateNestedManyWithoutProductInput {
  @TypeGraphQL.Field(_type => [Product_tagCreateWithoutProductInput], {
    nullable: true
  })
  create?: Product_tagCreateWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_tagCreateOrConnectWithoutProductInput], {
    nullable: true
  })
  connectOrCreate?: Product_tagCreateOrConnectWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => Product_tagCreateManyProductInputEnvelope, {
    nullable: true
  })
  createMany?: Product_tagCreateManyProductInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Product_tagWhereUniqueInput], {
    nullable: true
  })
  connect?: Product_tagWhereUniqueInput[] | undefined;
}
