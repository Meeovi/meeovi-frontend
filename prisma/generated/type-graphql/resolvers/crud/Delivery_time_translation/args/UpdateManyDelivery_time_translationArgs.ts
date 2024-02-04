import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Delivery_time_translationUpdateManyMutationInput } from "../../../inputs/Delivery_time_translationUpdateManyMutationInput";
import { Delivery_time_translationWhereInput } from "../../../inputs/Delivery_time_translationWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyDelivery_time_translationArgs {
  @TypeGraphQL.Field(_type => Delivery_time_translationUpdateManyMutationInput, {
    nullable: false
  })
  data!: Delivery_time_translationUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Delivery_time_translationWhereInput, {
    nullable: true
  })
  where?: Delivery_time_translationWhereInput | undefined;
}
