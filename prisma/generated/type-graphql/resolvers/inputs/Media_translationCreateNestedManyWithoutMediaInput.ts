import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Media_translationCreateManyMediaInputEnvelope } from "../inputs/Media_translationCreateManyMediaInputEnvelope";
import { Media_translationCreateOrConnectWithoutMediaInput } from "../inputs/Media_translationCreateOrConnectWithoutMediaInput";
import { Media_translationCreateWithoutMediaInput } from "../inputs/Media_translationCreateWithoutMediaInput";
import { Media_translationWhereUniqueInput } from "../inputs/Media_translationWhereUniqueInput";

@TypeGraphQL.InputType("Media_translationCreateNestedManyWithoutMediaInput", {})
export class Media_translationCreateNestedManyWithoutMediaInput {
  @TypeGraphQL.Field(_type => [Media_translationCreateWithoutMediaInput], {
    nullable: true
  })
  create?: Media_translationCreateWithoutMediaInput[] | undefined;

  @TypeGraphQL.Field(_type => [Media_translationCreateOrConnectWithoutMediaInput], {
    nullable: true
  })
  connectOrCreate?: Media_translationCreateOrConnectWithoutMediaInput[] | undefined;

  @TypeGraphQL.Field(_type => Media_translationCreateManyMediaInputEnvelope, {
    nullable: true
  })
  createMany?: Media_translationCreateManyMediaInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Media_translationWhereUniqueInput], {
    nullable: true
  })
  connect?: Media_translationWhereUniqueInput[] | undefined;
}
