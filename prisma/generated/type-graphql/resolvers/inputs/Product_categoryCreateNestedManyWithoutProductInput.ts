import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_categoryCreateManyProductInputEnvelope } from "../inputs/Product_categoryCreateManyProductInputEnvelope";
import { Product_categoryCreateOrConnectWithoutProductInput } from "../inputs/Product_categoryCreateOrConnectWithoutProductInput";
import { Product_categoryCreateWithoutProductInput } from "../inputs/Product_categoryCreateWithoutProductInput";
import { Product_categoryWhereUniqueInput } from "../inputs/Product_categoryWhereUniqueInput";

@TypeGraphQL.InputType("Product_categoryCreateNestedManyWithoutProductInput", {})
export class Product_categoryCreateNestedManyWithoutProductInput {
  @TypeGraphQL.Field(_type => [Product_categoryCreateWithoutProductInput], {
    nullable: true
  })
  create?: Product_categoryCreateWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_categoryCreateOrConnectWithoutProductInput], {
    nullable: true
  })
  connectOrCreate?: Product_categoryCreateOrConnectWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => Product_categoryCreateManyProductInputEnvelope, {
    nullable: true
  })
  createMany?: Product_categoryCreateManyProductInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Product_categoryWhereUniqueInput], {
    nullable: true
  })
  connect?: Product_categoryWhereUniqueInput[] | undefined;
}
