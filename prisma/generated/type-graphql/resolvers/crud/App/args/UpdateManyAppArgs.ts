import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AppUpdateManyMutationInput } from "../../../inputs/AppUpdateManyMutationInput";
import { AppWhereInput } from "../../../inputs/AppWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyAppArgs {
  @TypeGraphQL.Field(_type => AppUpdateManyMutationInput, {
    nullable: false
  })
  data!: AppUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => AppWhereInput, {
    nullable: true
  })
  where?: AppWhereInput | undefined;
}
