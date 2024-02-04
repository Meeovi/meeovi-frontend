import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Delivery_timeUpdateManyMutationInput } from "../../../inputs/Delivery_timeUpdateManyMutationInput";
import { Delivery_timeWhereInput } from "../../../inputs/Delivery_timeWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyDelivery_timeArgs {
  @TypeGraphQL.Field(_type => Delivery_timeUpdateManyMutationInput, {
    nullable: false
  })
  data!: Delivery_timeUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Delivery_timeWhereInput, {
    nullable: true
  })
  where?: Delivery_timeWhereInput | undefined;
}
