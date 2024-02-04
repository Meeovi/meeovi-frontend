import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Adyen_notificationWhereInput } from "../../../inputs/Adyen_notificationWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyAdyen_notificationArgs {
  @TypeGraphQL.Field(_type => Adyen_notificationWhereInput, {
    nullable: true
  })
  where?: Adyen_notificationWhereInput | undefined;
}
