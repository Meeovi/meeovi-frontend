import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DocumentCreateManyMediaInputEnvelope } from "../inputs/DocumentCreateManyMediaInputEnvelope";
import { DocumentCreateOrConnectWithoutMediaInput } from "../inputs/DocumentCreateOrConnectWithoutMediaInput";
import { DocumentCreateWithoutMediaInput } from "../inputs/DocumentCreateWithoutMediaInput";
import { DocumentWhereUniqueInput } from "../inputs/DocumentWhereUniqueInput";

@TypeGraphQL.InputType("DocumentCreateNestedManyWithoutMediaInput", {})
export class DocumentCreateNestedManyWithoutMediaInput {
  @TypeGraphQL.Field(_type => [DocumentCreateWithoutMediaInput], {
    nullable: true
  })
  create?: DocumentCreateWithoutMediaInput[] | undefined;

  @TypeGraphQL.Field(_type => [DocumentCreateOrConnectWithoutMediaInput], {
    nullable: true
  })
  connectOrCreate?: DocumentCreateOrConnectWithoutMediaInput[] | undefined;

  @TypeGraphQL.Field(_type => DocumentCreateManyMediaInputEnvelope, {
    nullable: true
  })
  createMany?: DocumentCreateManyMediaInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [DocumentWhereUniqueInput], {
    nullable: true
  })
  connect?: DocumentWhereUniqueInput[] | undefined;
}
