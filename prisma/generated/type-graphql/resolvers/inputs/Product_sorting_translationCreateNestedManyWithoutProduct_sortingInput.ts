import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_sorting_translationCreateManyProduct_sortingInputEnvelope } from "../inputs/Product_sorting_translationCreateManyProduct_sortingInputEnvelope";
import { Product_sorting_translationCreateOrConnectWithoutProduct_sortingInput } from "../inputs/Product_sorting_translationCreateOrConnectWithoutProduct_sortingInput";
import { Product_sorting_translationCreateWithoutProduct_sortingInput } from "../inputs/Product_sorting_translationCreateWithoutProduct_sortingInput";
import { Product_sorting_translationWhereUniqueInput } from "../inputs/Product_sorting_translationWhereUniqueInput";

@TypeGraphQL.InputType("Product_sorting_translationCreateNestedManyWithoutProduct_sortingInput", {})
export class Product_sorting_translationCreateNestedManyWithoutProduct_sortingInput {
  @TypeGraphQL.Field(_type => [Product_sorting_translationCreateWithoutProduct_sortingInput], {
    nullable: true
  })
  create?: Product_sorting_translationCreateWithoutProduct_sortingInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_sorting_translationCreateOrConnectWithoutProduct_sortingInput], {
    nullable: true
  })
  connectOrCreate?: Product_sorting_translationCreateOrConnectWithoutProduct_sortingInput[] | undefined;

  @TypeGraphQL.Field(_type => Product_sorting_translationCreateManyProduct_sortingInputEnvelope, {
    nullable: true
  })
  createMany?: Product_sorting_translationCreateManyProduct_sortingInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Product_sorting_translationWhereUniqueInput], {
    nullable: true
  })
  connect?: Product_sorting_translationWhereUniqueInput[] | undefined;
}
