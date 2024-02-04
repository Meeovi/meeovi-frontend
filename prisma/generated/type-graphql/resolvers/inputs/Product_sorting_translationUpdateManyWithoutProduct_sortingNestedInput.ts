import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_sorting_translationCreateManyProduct_sortingInputEnvelope } from "../inputs/Product_sorting_translationCreateManyProduct_sortingInputEnvelope";
import { Product_sorting_translationCreateOrConnectWithoutProduct_sortingInput } from "../inputs/Product_sorting_translationCreateOrConnectWithoutProduct_sortingInput";
import { Product_sorting_translationCreateWithoutProduct_sortingInput } from "../inputs/Product_sorting_translationCreateWithoutProduct_sortingInput";
import { Product_sorting_translationScalarWhereInput } from "../inputs/Product_sorting_translationScalarWhereInput";
import { Product_sorting_translationUpdateManyWithWhereWithoutProduct_sortingInput } from "../inputs/Product_sorting_translationUpdateManyWithWhereWithoutProduct_sortingInput";
import { Product_sorting_translationUpdateWithWhereUniqueWithoutProduct_sortingInput } from "../inputs/Product_sorting_translationUpdateWithWhereUniqueWithoutProduct_sortingInput";
import { Product_sorting_translationUpsertWithWhereUniqueWithoutProduct_sortingInput } from "../inputs/Product_sorting_translationUpsertWithWhereUniqueWithoutProduct_sortingInput";
import { Product_sorting_translationWhereUniqueInput } from "../inputs/Product_sorting_translationWhereUniqueInput";

@TypeGraphQL.InputType("Product_sorting_translationUpdateManyWithoutProduct_sortingNestedInput", {})
export class Product_sorting_translationUpdateManyWithoutProduct_sortingNestedInput {
  @TypeGraphQL.Field(_type => [Product_sorting_translationCreateWithoutProduct_sortingInput], {
    nullable: true
  })
  create?: Product_sorting_translationCreateWithoutProduct_sortingInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_sorting_translationCreateOrConnectWithoutProduct_sortingInput], {
    nullable: true
  })
  connectOrCreate?: Product_sorting_translationCreateOrConnectWithoutProduct_sortingInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_sorting_translationUpsertWithWhereUniqueWithoutProduct_sortingInput], {
    nullable: true
  })
  upsert?: Product_sorting_translationUpsertWithWhereUniqueWithoutProduct_sortingInput[] | undefined;

  @TypeGraphQL.Field(_type => Product_sorting_translationCreateManyProduct_sortingInputEnvelope, {
    nullable: true
  })
  createMany?: Product_sorting_translationCreateManyProduct_sortingInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Product_sorting_translationWhereUniqueInput], {
    nullable: true
  })
  set?: Product_sorting_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_sorting_translationWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Product_sorting_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_sorting_translationWhereUniqueInput], {
    nullable: true
  })
  delete?: Product_sorting_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_sorting_translationWhereUniqueInput], {
    nullable: true
  })
  connect?: Product_sorting_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_sorting_translationUpdateWithWhereUniqueWithoutProduct_sortingInput], {
    nullable: true
  })
  update?: Product_sorting_translationUpdateWithWhereUniqueWithoutProduct_sortingInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_sorting_translationUpdateManyWithWhereWithoutProduct_sortingInput], {
    nullable: true
  })
  updateMany?: Product_sorting_translationUpdateManyWithWhereWithoutProduct_sortingInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_sorting_translationScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Product_sorting_translationScalarWhereInput[] | undefined;
}
