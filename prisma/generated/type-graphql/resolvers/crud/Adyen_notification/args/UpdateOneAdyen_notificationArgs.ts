import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Adyen_notificationUpdateInput } from "../../../inputs/Adyen_notificationUpdateInput";
import { Adyen_notificationWhereUniqueInput } from "../../../inputs/Adyen_notificationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneAdyen_notificationArgs {
  @TypeGraphQL.Field(_type => Adyen_notificationUpdateInput, {
    nullable: false
  })
  data!: Adyen_notificationUpdateInput;

  @TypeGraphQL.Field(_type => Adyen_notificationWhereUniqueInput, {
    nullable: false
  })
  where!: Adyen_notificationWhereUniqueInput;
}
