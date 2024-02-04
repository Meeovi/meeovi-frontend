import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Shipping_method_translationWhereInput } from "../../../inputs/Shipping_method_translationWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyShipping_method_translationArgs {
  @TypeGraphQL.Field(_type => Shipping_method_translationWhereInput, {
    nullable: true
  })
  where?: Shipping_method_translationWhereInput | undefined;
}
