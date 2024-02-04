import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_visibilityUpdateInput } from "../../../inputs/Product_visibilityUpdateInput";
import { Product_visibilityWhereUniqueInput } from "../../../inputs/Product_visibilityWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneProduct_visibilityArgs {
  @TypeGraphQL.Field(_type => Product_visibilityUpdateInput, {
    nullable: false
  })
  data!: Product_visibilityUpdateInput;

  @TypeGraphQL.Field(_type => Product_visibilityWhereUniqueInput, {
    nullable: false
  })
  where!: Product_visibilityWhereUniqueInput;
}
