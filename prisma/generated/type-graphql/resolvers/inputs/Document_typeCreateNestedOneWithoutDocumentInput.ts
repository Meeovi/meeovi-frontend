import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Document_typeCreateOrConnectWithoutDocumentInput } from "../inputs/Document_typeCreateOrConnectWithoutDocumentInput";
import { Document_typeCreateWithoutDocumentInput } from "../inputs/Document_typeCreateWithoutDocumentInput";
import { Document_typeWhereUniqueInput } from "../inputs/Document_typeWhereUniqueInput";

@TypeGraphQL.InputType("Document_typeCreateNestedOneWithoutDocumentInput", {})
export class Document_typeCreateNestedOneWithoutDocumentInput {
  @TypeGraphQL.Field(_type => Document_typeCreateWithoutDocumentInput, {
    nullable: true
  })
  create?: Document_typeCreateWithoutDocumentInput | undefined;

  @TypeGraphQL.Field(_type => Document_typeCreateOrConnectWithoutDocumentInput, {
    nullable: true
  })
  connectOrCreate?: Document_typeCreateOrConnectWithoutDocumentInput | undefined;

  @TypeGraphQL.Field(_type => Document_typeWhereUniqueInput, {
    nullable: true
  })
  connect?: Document_typeWhereUniqueInput | undefined;
}
