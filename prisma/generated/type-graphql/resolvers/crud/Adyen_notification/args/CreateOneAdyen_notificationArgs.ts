import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Adyen_notificationCreateInput } from "../../../inputs/Adyen_notificationCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneAdyen_notificationArgs {
  @TypeGraphQL.Field(_type => Adyen_notificationCreateInput, {
    nullable: false
  })
  data!: Adyen_notificationCreateInput;
}
