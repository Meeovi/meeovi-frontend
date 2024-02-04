import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Landing_page_translationUpdateManyMutationInput } from "../../../inputs/Landing_page_translationUpdateManyMutationInput";
import { Landing_page_translationWhereInput } from "../../../inputs/Landing_page_translationWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyLanding_page_translationArgs {
  @TypeGraphQL.Field(_type => Landing_page_translationUpdateManyMutationInput, {
    nullable: false
  })
  data!: Landing_page_translationUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Landing_page_translationWhereInput, {
    nullable: true
  })
  where?: Landing_page_translationWhereInput | undefined;
}
