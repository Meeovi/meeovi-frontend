import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Adyen_notificationWhereUniqueInput } from "../../../inputs/Adyen_notificationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueAdyen_notificationArgs {
  @TypeGraphQL.Field(_type => Adyen_notificationWhereUniqueInput, {
    nullable: false
  })
  where!: Adyen_notificationWhereUniqueInput;
}
