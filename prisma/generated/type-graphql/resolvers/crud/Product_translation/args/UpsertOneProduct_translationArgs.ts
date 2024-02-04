import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_translationCreateInput } from "../../../inputs/Product_translationCreateInput";
import { Product_translationUpdateInput } from "../../../inputs/Product_translationUpdateInput";
import { Product_translationWhereUniqueInput } from "../../../inputs/Product_translationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneProduct_translationArgs {
  @TypeGraphQL.Field(_type => Product_translationWhereUniqueInput, {
    nullable: false
  })
  where!: Product_translationWhereUniqueInput;

  @TypeGraphQL.Field(_type => Product_translationCreateInput, {
    nullable: false
  })
  create!: Product_translationCreateInput;

  @TypeGraphQL.Field(_type => Product_translationUpdateInput, {
    nullable: false
  })
  update!: Product_translationUpdateInput;
}
