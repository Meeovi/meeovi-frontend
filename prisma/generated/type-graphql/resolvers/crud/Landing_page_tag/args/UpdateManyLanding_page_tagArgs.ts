import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Landing_page_tagUpdateManyMutationInput } from "../../../inputs/Landing_page_tagUpdateManyMutationInput";
import { Landing_page_tagWhereInput } from "../../../inputs/Landing_page_tagWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyLanding_page_tagArgs {
  @TypeGraphQL.Field(_type => Landing_page_tagUpdateManyMutationInput, {
    nullable: false
  })
  data!: Landing_page_tagUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Landing_page_tagWhereInput, {
    nullable: true
  })
  where?: Landing_page_tagWhereInput | undefined;
}
