import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_reviewCreateInput } from "../../../inputs/Product_reviewCreateInput";
import { Product_reviewUpdateInput } from "../../../inputs/Product_reviewUpdateInput";
import { Product_reviewWhereUniqueInput } from "../../../inputs/Product_reviewWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneProduct_reviewArgs {
  @TypeGraphQL.Field(_type => Product_reviewWhereUniqueInput, {
    nullable: false
  })
  where!: Product_reviewWhereUniqueInput;

  @TypeGraphQL.Field(_type => Product_reviewCreateInput, {
    nullable: false
  })
  create!: Product_reviewCreateInput;

  @TypeGraphQL.Field(_type => Product_reviewUpdateInput, {
    nullable: false
  })
  update!: Product_reviewUpdateInput;
}
