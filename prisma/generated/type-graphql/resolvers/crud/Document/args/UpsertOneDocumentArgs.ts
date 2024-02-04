import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DocumentCreateInput } from "../../../inputs/DocumentCreateInput";
import { DocumentUpdateInput } from "../../../inputs/DocumentUpdateInput";
import { DocumentWhereUniqueInput } from "../../../inputs/DocumentWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneDocumentArgs {
  @TypeGraphQL.Field(_type => DocumentWhereUniqueInput, {
    nullable: false
  })
  where!: DocumentWhereUniqueInput;

  @TypeGraphQL.Field(_type => DocumentCreateInput, {
    nullable: false
  })
  create!: DocumentCreateInput;

  @TypeGraphQL.Field(_type => DocumentUpdateInput, {
    nullable: false
  })
  update!: DocumentUpdateInput;
}
