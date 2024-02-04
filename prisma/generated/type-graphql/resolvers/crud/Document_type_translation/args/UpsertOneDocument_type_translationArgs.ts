import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Document_type_translationCreateInput } from "../../../inputs/Document_type_translationCreateInput";
import { Document_type_translationUpdateInput } from "../../../inputs/Document_type_translationUpdateInput";
import { Document_type_translationWhereUniqueInput } from "../../../inputs/Document_type_translationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneDocument_type_translationArgs {
  @TypeGraphQL.Field(_type => Document_type_translationWhereUniqueInput, {
    nullable: false
  })
  where!: Document_type_translationWhereUniqueInput;

  @TypeGraphQL.Field(_type => Document_type_translationCreateInput, {
    nullable: false
  })
  create!: Document_type_translationCreateInput;

  @TypeGraphQL.Field(_type => Document_type_translationUpdateInput, {
    nullable: false
  })
  update!: Document_type_translationUpdateInput;
}
