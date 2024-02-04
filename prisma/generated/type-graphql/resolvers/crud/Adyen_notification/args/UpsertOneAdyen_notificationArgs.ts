import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Adyen_notificationCreateInput } from "../../../inputs/Adyen_notificationCreateInput";
import { Adyen_notificationUpdateInput } from "../../../inputs/Adyen_notificationUpdateInput";
import { Adyen_notificationWhereUniqueInput } from "../../../inputs/Adyen_notificationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneAdyen_notificationArgs {
  @TypeGraphQL.Field(_type => Adyen_notificationWhereUniqueInput, {
    nullable: false
  })
  where!: Adyen_notificationWhereUniqueInput;

  @TypeGraphQL.Field(_type => Adyen_notificationCreateInput, {
    nullable: false
  })
  create!: Adyen_notificationCreateInput;

  @TypeGraphQL.Field(_type => Adyen_notificationUpdateInput, {
    nullable: false
  })
  update!: Adyen_notificationUpdateInput;
}
