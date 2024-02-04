import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Delivery_time_translationUpdateInput } from "../../../inputs/Delivery_time_translationUpdateInput";
import { Delivery_time_translationWhereUniqueInput } from "../../../inputs/Delivery_time_translationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneDelivery_time_translationArgs {
  @TypeGraphQL.Field(_type => Delivery_time_translationUpdateInput, {
    nullable: false
  })
  data!: Delivery_time_translationUpdateInput;

  @TypeGraphQL.Field(_type => Delivery_time_translationWhereUniqueInput, {
    nullable: false
  })
  where!: Delivery_time_translationWhereUniqueInput;
}
