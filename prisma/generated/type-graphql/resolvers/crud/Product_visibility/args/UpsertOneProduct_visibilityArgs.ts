import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_visibilityCreateInput } from "../../../inputs/Product_visibilityCreateInput";
import { Product_visibilityUpdateInput } from "../../../inputs/Product_visibilityUpdateInput";
import { Product_visibilityWhereUniqueInput } from "../../../inputs/Product_visibilityWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneProduct_visibilityArgs {
  @TypeGraphQL.Field(_type => Product_visibilityWhereUniqueInput, {
    nullable: false
  })
  where!: Product_visibilityWhereUniqueInput;

  @TypeGraphQL.Field(_type => Product_visibilityCreateInput, {
    nullable: false
  })
  create!: Product_visibilityCreateInput;

  @TypeGraphQL.Field(_type => Product_visibilityUpdateInput, {
    nullable: false
  })
  update!: Product_visibilityUpdateInput;
}
