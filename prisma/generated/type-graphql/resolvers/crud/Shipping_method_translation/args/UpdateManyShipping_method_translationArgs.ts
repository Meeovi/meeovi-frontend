import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Shipping_method_translationUpdateManyMutationInput } from "../../../inputs/Shipping_method_translationUpdateManyMutationInput";
import { Shipping_method_translationWhereInput } from "../../../inputs/Shipping_method_translationWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyShipping_method_translationArgs {
  @TypeGraphQL.Field(_type => Shipping_method_translationUpdateManyMutationInput, {
    nullable: false
  })
  data!: Shipping_method_translationUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Shipping_method_translationWhereInput, {
    nullable: true
  })
  where?: Shipping_method_translationWhereInput | undefined;
}
