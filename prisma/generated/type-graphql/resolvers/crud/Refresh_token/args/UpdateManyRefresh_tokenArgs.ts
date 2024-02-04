import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Refresh_tokenUpdateManyMutationInput } from "../../../inputs/Refresh_tokenUpdateManyMutationInput";
import { Refresh_tokenWhereInput } from "../../../inputs/Refresh_tokenWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyRefresh_tokenArgs {
  @TypeGraphQL.Field(_type => Refresh_tokenUpdateManyMutationInput, {
    nullable: false
  })
  data!: Refresh_tokenUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Refresh_tokenWhereInput, {
    nullable: true
  })
  where?: Refresh_tokenWhereInput | undefined;
}
