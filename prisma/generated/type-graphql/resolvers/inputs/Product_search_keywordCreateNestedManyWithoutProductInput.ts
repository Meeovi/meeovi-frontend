import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_search_keywordCreateManyProductInputEnvelope } from "../inputs/Product_search_keywordCreateManyProductInputEnvelope";
import { Product_search_keywordCreateOrConnectWithoutProductInput } from "../inputs/Product_search_keywordCreateOrConnectWithoutProductInput";
import { Product_search_keywordCreateWithoutProductInput } from "../inputs/Product_search_keywordCreateWithoutProductInput";
import { Product_search_keywordWhereUniqueInput } from "../inputs/Product_search_keywordWhereUniqueInput";

@TypeGraphQL.InputType("Product_search_keywordCreateNestedManyWithoutProductInput", {})
export class Product_search_keywordCreateNestedManyWithoutProductInput {
  @TypeGraphQL.Field(_type => [Product_search_keywordCreateWithoutProductInput], {
    nullable: true
  })
  create?: Product_search_keywordCreateWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_search_keywordCreateOrConnectWithoutProductInput], {
    nullable: true
  })
  connectOrCreate?: Product_search_keywordCreateOrConnectWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => Product_search_keywordCreateManyProductInputEnvelope, {
    nullable: true
  })
  createMany?: Product_search_keywordCreateManyProductInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Product_search_keywordWhereUniqueInput], {
    nullable: true
  })
  connect?: Product_search_keywordWhereUniqueInput[] | undefined;
}
