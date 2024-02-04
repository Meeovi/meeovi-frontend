import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DocumentUpdateInput } from "../../../inputs/DocumentUpdateInput";
import { DocumentWhereUniqueInput } from "../../../inputs/DocumentWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneDocumentArgs {
  @TypeGraphQL.Field(_type => DocumentUpdateInput, {
    nullable: false
  })
  data!: DocumentUpdateInput;

  @TypeGraphQL.Field(_type => DocumentWhereUniqueInput, {
    nullable: false
  })
  where!: DocumentWhereUniqueInput;
}
