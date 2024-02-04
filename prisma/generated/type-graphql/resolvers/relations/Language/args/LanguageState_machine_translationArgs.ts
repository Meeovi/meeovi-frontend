import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { State_machine_translationOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/State_machine_translationOrderByWithRelationAndSearchRelevanceInput";
import { State_machine_translationWhereInput } from "../../../inputs/State_machine_translationWhereInput";
import { State_machine_translationWhereUniqueInput } from "../../../inputs/State_machine_translationWhereUniqueInput";
import { State_machine_translationScalarFieldEnum } from "../../../../enums/State_machine_translationScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class LanguageState_machine_translationArgs {
  @TypeGraphQL.Field(_type => State_machine_translationWhereInput, {
    nullable: true
  })
  where?: State_machine_translationWhereInput | undefined;

  @TypeGraphQL.Field(_type => [State_machine_translationOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: State_machine_translationOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => State_machine_translationWhereUniqueInput, {
    nullable: true
  })
  cursor?: State_machine_translationWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [State_machine_translationScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"language_id" | "state_machine_id" | "name" | "custom_fields" | "created_at" | "updated_at"> | undefined;
}
