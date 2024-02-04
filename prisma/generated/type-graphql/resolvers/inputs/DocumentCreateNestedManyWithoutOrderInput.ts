import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DocumentCreateManyOrderInputEnvelope } from "../inputs/DocumentCreateManyOrderInputEnvelope";
import { DocumentCreateOrConnectWithoutOrderInput } from "../inputs/DocumentCreateOrConnectWithoutOrderInput";
import { DocumentCreateWithoutOrderInput } from "../inputs/DocumentCreateWithoutOrderInput";
import { DocumentWhereUniqueInput } from "../inputs/DocumentWhereUniqueInput";

@TypeGraphQL.InputType("DocumentCreateNestedManyWithoutOrderInput", {})
export class DocumentCreateNestedManyWithoutOrderInput {
  @TypeGraphQL.Field(_type => [DocumentCreateWithoutOrderInput], {
    nullable: true
  })
  create?: DocumentCreateWithoutOrderInput[] | undefined;

  @TypeGraphQL.Field(_type => [DocumentCreateOrConnectWithoutOrderInput], {
    nullable: true
  })
  connectOrCreate?: DocumentCreateOrConnectWithoutOrderInput[] | undefined;

  @TypeGraphQL.Field(_type => DocumentCreateManyOrderInputEnvelope, {
    nullable: true
  })
  createMany?: DocumentCreateManyOrderInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [DocumentWhereUniqueInput], {
    nullable: true
  })
  connect?: DocumentWhereUniqueInput[] | undefined;
}
