import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Adyen_notificationUpdateManyMutationInput } from "../../../inputs/Adyen_notificationUpdateManyMutationInput";
import { Adyen_notificationWhereInput } from "../../../inputs/Adyen_notificationWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyAdyen_notificationArgs {
  @TypeGraphQL.Field(_type => Adyen_notificationUpdateManyMutationInput, {
    nullable: false
  })
  data!: Adyen_notificationUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Adyen_notificationWhereInput, {
    nullable: true
  })
  where?: Adyen_notificationWhereInput | undefined;
}
