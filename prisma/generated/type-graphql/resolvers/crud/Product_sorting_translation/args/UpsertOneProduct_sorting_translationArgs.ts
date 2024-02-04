import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_sorting_translationCreateInput } from "../../../inputs/Product_sorting_translationCreateInput";
import { Product_sorting_translationUpdateInput } from "../../../inputs/Product_sorting_translationUpdateInput";
import { Product_sorting_translationWhereUniqueInput } from "../../../inputs/Product_sorting_translationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneProduct_sorting_translationArgs {
  @TypeGraphQL.Field(_type => Product_sorting_translationWhereUniqueInput, {
    nullable: false
  })
  where!: Product_sorting_translationWhereUniqueInput;

  @TypeGraphQL.Field(_type => Product_sorting_translationCreateInput, {
    nullable: false
  })
  create!: Product_sorting_translationCreateInput;

  @TypeGraphQL.Field(_type => Product_sorting_translationUpdateInput, {
    nullable: false
  })
  update!: Product_sorting_translationUpdateInput;
}
