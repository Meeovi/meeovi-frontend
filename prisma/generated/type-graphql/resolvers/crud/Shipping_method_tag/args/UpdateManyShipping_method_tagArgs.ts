import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Shipping_method_tagUpdateManyMutationInput } from "../../../inputs/Shipping_method_tagUpdateManyMutationInput";
import { Shipping_method_tagWhereInput } from "../../../inputs/Shipping_method_tagWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyShipping_method_tagArgs {
  @TypeGraphQL.Field(_type => Shipping_method_tagUpdateManyMutationInput, {
    nullable: false
  })
  data!: Shipping_method_tagUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Shipping_method_tagWhereInput, {
    nullable: true
  })
  where?: Shipping_method_tagWhereInput | undefined;
}
