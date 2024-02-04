import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Adyen_notificationCreateManyInput } from "../../../inputs/Adyen_notificationCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyAdyen_notificationArgs {
  @TypeGraphQL.Field(_type => [Adyen_notificationCreateManyInput], {
    nullable: false
  })
  data!: Adyen_notificationCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
