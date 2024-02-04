import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_mediaCreateManyProductInputEnvelope } from "../inputs/Product_mediaCreateManyProductInputEnvelope";
import { Product_mediaCreateOrConnectWithoutProductInput } from "../inputs/Product_mediaCreateOrConnectWithoutProductInput";
import { Product_mediaCreateWithoutProductInput } from "../inputs/Product_mediaCreateWithoutProductInput";
import { Product_mediaWhereUniqueInput } from "../inputs/Product_mediaWhereUniqueInput";

@TypeGraphQL.InputType("Product_mediaCreateNestedManyWithoutProductInput", {})
export class Product_mediaCreateNestedManyWithoutProductInput {
  @TypeGraphQL.Field(_type => [Product_mediaCreateWithoutProductInput], {
    nullable: true
  })
  create?: Product_mediaCreateWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_mediaCreateOrConnectWithoutProductInput], {
    nullable: true
  })
  connectOrCreate?: Product_mediaCreateOrConnectWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => Product_mediaCreateManyProductInputEnvelope, {
    nullable: true
  })
  createMany?: Product_mediaCreateManyProductInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Product_mediaWhereUniqueInput], {
    nullable: true
  })
  connect?: Product_mediaWhereUniqueInput[] | undefined;
}
