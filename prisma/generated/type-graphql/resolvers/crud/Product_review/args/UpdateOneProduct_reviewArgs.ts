import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_reviewUpdateInput } from "../../../inputs/Product_reviewUpdateInput";
import { Product_reviewWhereUniqueInput } from "../../../inputs/Product_reviewWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneProduct_reviewArgs {
  @TypeGraphQL.Field(_type => Product_reviewUpdateInput, {
    nullable: false
  })
  data!: Product_reviewUpdateInput;

  @TypeGraphQL.Field(_type => Product_reviewWhereUniqueInput, {
    nullable: false
  })
  where!: Product_reviewWhereUniqueInput;
}
