import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Landing_pageUpdateManyMutationInput } from "../../../inputs/Landing_pageUpdateManyMutationInput";
import { Landing_pageWhereInput } from "../../../inputs/Landing_pageWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyLanding_pageArgs {
  @TypeGraphQL.Field(_type => Landing_pageUpdateManyMutationInput, {
    nullable: false
  })
  data!: Landing_pageUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Landing_pageWhereInput, {
    nullable: true
  })
  where?: Landing_pageWhereInput | undefined;
}
