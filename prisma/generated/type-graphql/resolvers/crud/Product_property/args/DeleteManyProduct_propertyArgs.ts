import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_propertyWhereInput } from "../../../inputs/Product_propertyWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyProduct_propertyArgs {
  @TypeGraphQL.Field(_type => Product_propertyWhereInput, {
    nullable: true
  })
  where?: Product_propertyWhereInput | undefined;
}
