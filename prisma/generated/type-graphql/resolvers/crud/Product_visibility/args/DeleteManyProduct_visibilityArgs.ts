import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_visibilityWhereInput } from "../../../inputs/Product_visibilityWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyProduct_visibilityArgs {
  @TypeGraphQL.Field(_type => Product_visibilityWhereInput, {
    nullable: true
  })
  where?: Product_visibilityWhereInput | undefined;
}
