import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Document_typeCreateInput } from "../../../inputs/Document_typeCreateInput";
import { Document_typeUpdateInput } from "../../../inputs/Document_typeUpdateInput";
import { Document_typeWhereUniqueInput } from "../../../inputs/Document_typeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneDocument_typeArgs {
  @TypeGraphQL.Field(_type => Document_typeWhereUniqueInput, {
    nullable: false
  })
  where!: Document_typeWhereUniqueInput;

  @TypeGraphQL.Field(_type => Document_typeCreateInput, {
    nullable: false
  })
  create!: Document_typeCreateInput;

  @TypeGraphQL.Field(_type => Document_typeUpdateInput, {
    nullable: false
  })
  update!: Document_typeUpdateInput;
}
